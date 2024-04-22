import { z } from "zod";

export const CreateProjectSchema = z.object({
    projectName: z.string().min(1, { message: 'Project name is required' }),
    projectType: z.string().min(1, { message: 'Project type is required' }),
    projectLink: z.string().max(256, { message: 'Project link is too long' }),
    projectDescription: z.string().min(1, { message: 'Project description is required' }).max(1000, { message: 'Project description is too long' }),
    projectSkills: z.string().max(1000, { message: 'Preffered skills and expertise is too long' }),
});

export type CreateProjectInputs = z.infer<typeof CreateProjectSchema>


export const UpdateProjectSchema = z.object({
    projectName: z.string().min(1, { message: 'Project name is required' }),
    projectType: z.string().min(1, { message: 'Project type is required' }),
    projectDescription: z.string().min(1, { message: 'Project description is required' }).max(1000, { message: 'Project description is too long' }),
    projectSkills: z.string().max(1000, { message: 'Preffered skills and expertise is too long' }),
    projectLink: z.string().max(256, { message: 'Project link is too long' }),
});
export type UpdateProjectInputs = z.infer<typeof UpdateProjectSchema>;

export const CreateEventSchema = z.object({
    eventName: z.string().min(1, { message: 'Event name is required' }),
    isPartOfEvent: z.boolean(),
    eventProjectType: z.array(z.string()).min(1, { message: 'At least one event project type must be selected' }),
    eventExpertise: z.array(z.string()).min(1, { message: 'At least one user expertise must be selected' }),
});

export type CreateEventInputs = z.infer<typeof CreateEventSchema>

export const UpdateProfileSchema = z.object({
    profileName: z.string().min(1, { message: 'Project name is required' }),
    profileExpertise: z.string().min(1, { message: 'Project type is required' }),
    profileDescription: z.string().max(1000, { message: 'Your skills and intrests are too long' }),
});
export type UpdateProfileInputs = z.infer<typeof UpdateProfileSchema>;

export const ApplyFilterSchema = z.object({
    projectSearch: z.string(),
    projectType: z.string(),
});

export type ApplyFilterInputs = z.infer<typeof ApplyFilterSchema>

export const FindTeamMemberSchema = z.object({
    memberSearch: z.string(),
    expertise: z.string(),
});

export type FindTeamMemberInputs = z.infer<typeof FindTeamMemberSchema>

