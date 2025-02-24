import createRefresh from "react-auth-kit/createRefresh";
import client from "./api";

export const refresh = createRefresh({
	interval: 60*60*23, // The time in sec to refresh the Access token,
	refreshApiCallback: async (param) => {
		try {
			const response = await client.post("refresh/token/", param, {
				headers: {"Authorization": `Bearer ${param.authToken}`}
			});
			console.log("Refreshing");
			return {
				isSuccess: true,
				newAuthToken: response.data.token,
				newAuthTokenExpireIn: 60 * 60 * 24,
				newRefreshTokenExpiresIn: 60 * 60 * 24
			};
		}
		catch(error){
			console.error(error);
			return {
				isSuccess: false
			}; 
		}
	}
});