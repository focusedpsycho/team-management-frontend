export interface TeamMember{
     memberId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailId: string;
    roleType: string;
}

export interface TeamMembersResponse{
    response: TeamMember[];
    total: number;
}