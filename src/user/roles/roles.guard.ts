import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {Reflector} from "@nestjs/core";
import {JwtService} from "@nestjs/jwt";
import {Role} from "./role.enum";
import {ROLES_KEY} from "./roles.decorator";
import httpMessages from "../../errorsMessage/httpMessages";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector, private jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
            ROLES_KEY, [context.getHandler(), context.getClass()]
        );
        if(!requiredRoles){
            return true
        }
        const req = context.switchToHttp().getRequest()
        const {headers: {authorization}} = req
        const [bearer, token] = authorization.split(' ')
        if(bearer !== 'Bearer' && !token){
            throw new UnauthorizedException(httpMessages.userIsNotAuthorithation)
        }
        const {id, roles} = this.jwtService.verify(token)
        req.user = {id, roles}
        return requiredRoles.some((role) => req.user.roles?.includes(role))
    }
}