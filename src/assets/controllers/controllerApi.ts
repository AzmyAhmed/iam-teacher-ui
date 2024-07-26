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
        sysLinks: `App_Links_Stp`,
        App_Sections_Data: `App_Sections_DataConroller`,
        
        Shared: `${apiUrl}/api/Shared`
    };
}