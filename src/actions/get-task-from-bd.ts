// "use server"
// import prisma from "@/utils/prisma";

// const GetTasks = async () => {
//     const tasks = await prisma.tasks.findMany();
//     if (!tasks) return 

//     console.log(tasks);
//     return tasks;

// }

// export default GetTasks

// "use server"
// import prisma from "@/utils/prisma";

// const GetTasks = async () => {
//     try {
//         const tasks = await prisma.task.findMany();
//         if (!tasks || tasks.length === 0) {
//             return [];
//         }
        
//         console.log(tasks);
//         return tasks;
//     } catch (error) {
//         console.error("Erro ao buscar tasks:", error);
//         throw new Error("Não foi possível carregar as tarefas");
//     }
// }

// export default GetTasks

"use server"
import prisma from "@/utils/prisma";

const GetTasks = async () => {
    try {
        const tasks = await prisma.task.findMany();
        return tasks ?? [];
    } catch (error) {
        console.error("Erro ao buscar tasks:", error);
        throw new Error("Não foi possível carregar as tarefas");
    }
}

export default GetTasks;
