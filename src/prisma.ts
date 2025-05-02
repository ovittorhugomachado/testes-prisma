import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//FUNÇÃO PRA CRIAR USUÁRIO NA TABELA USER
// async function createUser() {
//     const name = "Vitor"
//     const email = "julia@email.com"
//     const passwordHash = "jcwqcqown"
//     const dateBirth = "2000-04-23"
//     const phone = "51980560089"

//     const userExist = await prisma.user.findUnique({
//         where: {
//             email: email
//         }
//     })

//     if(userExist) throw new Error("Usuário já existe")

//     await prisma.user.create({
//         data: {
//             name,
//             email,
//             passwordHash,
//             dateBirth: new Date(dateBirth),
//             phone

//         },
//     })
// }

// createUser()

//FUNÇÃO PRA ATUALIZAR USUÁRIO
// async function updateUserName() {
//     await prisma.user.update({
//         where: {
//             id: 1
//         },
//         data: {
//             name: "Vitor Hugo Alves Machado"
//         }
//     })
// }

// updateUserName()

//FUNÇÃO PRA DELETAR USUÁRIO
// async function deleteUser () {
//     await prisma.user.delete({
//         where: {
//             id: 1
//         }
//     })
// }

// deleteUser()

//BUSCA O PRIMEIRO REGISTRO COM OS DADOS INSERIDOS NO WHERE
async function findFirstUserByName() {
    const firstUser = await prisma.user.findFirst({ 
        where: { 
            name: "Vitor Hugo Alves" 
        },
        include: { Address: true }
    });

    if(firstUser) console.log("Usuário encontrado:", firstUser)
    else console.log("usuário não encontrado")

}

findFirstUserByName()


//BUSCA O REGISTRO DO USUÁRIO
// async function getUsers() {
//     const users = await prisma.user.findMany()

//     console.log(users)
// }

// getUsers()


//USANDO O TRANSACTION
// async function createUserAndAddress() {
//     const name = "Vitor Hugo Alves"
//     const email = "cebola@email.com"
//     const passwordHash = "jcwqcqown"
//     const dateBirth = "2000-04-23"
//     const phone = "51980560089"

//     const street = "João Batista Conzatti"
//     const city = "Eldorado do Sul"
//     const state = "Rio Grande do Sul"
//     const zipCode = "92990-000"

//     const userExist = await prisma.user.findUnique({ where: { email } });

//     if(userExist) throw new Error("Usuário já existe")

//     const response = await prisma.$transaction(async(prisma) => {

//         const user = await prisma.user.create({
//             data: {
//                 name,
//                 email,
//                 passwordHash,
//                 dateBirth: new Date(dateBirth),
//                 phone
//             },
//         });

//         const address = await prisma.address.create({
//             data: {
//                 userId: user.id,
//                 street,
//                 city,
//                 state,
//                 zipCode
//             },
//         });

//         return { user , address }
//     })

//     console.log(response)
// }

// createUserAndAddress()