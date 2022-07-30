export interface IWorkExperienceItem {
    logotype: string;
    companyName: string;
    workingData: {
        start: string,
        finish: string
    };
    isCurrentWork: boolean;
    principalFunctionsDetails: string;
    moreDetails: string;
    collapseMoreDetailsId: string;
    position?: string;
}