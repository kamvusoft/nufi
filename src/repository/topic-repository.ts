import { ApplicationReference } from "../dto/application-dto";
import { TopicCreateDTO } from "../dto/topic-dto";
import prisma from "../lib/prisma-client";

export async function createTopic(topic: TopicCreateDTO, app: ApplicationReference) {
    const savedTopic = await prisma.topic.create({
        data: {
            name: topic.name,
            description: topic.description,
            application: {
                connect: {
                    id: app.id
                }
            }
        },
        include: {
            application: true
        }
    });
    return savedTopic;
}