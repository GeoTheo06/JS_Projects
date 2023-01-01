import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { AuthGuard } from "@nestjs/passport";

@Controller("google")
export class AppController {
	constructor(private readonly appService: AppService) {}

	//activates the google authentication through a special Guard from the “@nestjs/passport” module placed on the endpoint called “AuthGaurd”. We pass in ‘google’ as the argument to this AuthGuard to signify that we want to use the google strategy from the passport module to authenticate the request on this endpoint.
	@Get()
	@UseGuards(AuthGuard("google"))
	async googleAuth(@Req() req) {}

	//refers to the second endpoint where google will redirect to (redirect URL) after authenticating a user. This endpoint also uses the special AuthGuard. After the done function in the validate method from the google strategy file is called, control is returned back to the googleLogin function on this controller.
	@Get("redirect")
	@UseGuards(AuthGuard("google"))
	googleAuthRedirect(@Req() req) {
		return this.appService.googleLogin(req);
	}
}
