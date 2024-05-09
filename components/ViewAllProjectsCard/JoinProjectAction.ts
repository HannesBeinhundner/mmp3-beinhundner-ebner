'use server'
 
import { prisma } from "@/prisma";
 
export async function joinProject(session: any, projectId: number) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: session
            }
        });

        if (!user) {
            return { success: false, error: 'User not found.' };
        }

        const updatedUser = await prisma.user.update({
            where: { id: user.id },
            data: {
                projectId: projectId,
            },
        });

        return { success: true, data: updatedUser };
    } catch (error) {
        console.error('Error joining project:', error);
        return { success: false, error: 'An unexpected error occurred.' };
    }
}