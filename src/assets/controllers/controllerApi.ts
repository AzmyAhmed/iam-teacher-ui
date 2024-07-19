const apiUrl = 'http://localhost:5140';
export class Controller {
    public static controllerApi = {
        config: 'commands/config',
        wejiCategoriesAndClassifications: `WejiCategoriesAndClassifications`,
        sections: `Sections`,
        userRequest: `${apiUrl}/api/UserRequest`,
        userAuth: `UserAuth`,
        tteacher: `tteacher`,
        smsControl: `SmsControl`,
        Shared: `${apiUrl}/api/Shared`

    };
}