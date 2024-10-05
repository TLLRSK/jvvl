// destructuring PrismaClient
const { PrismaClient } = require('@prisma/client');
// Getting products list
const products = require('./products.json');
// Creating prisma instance
const prisma = new PrismaClient();

// defining function that iterates over products arr and creating data in prisma db
async function main() {
     for(const product of products) {
        await prisma.product.create({
            data: product,
        });
     }
}
// calling main() function
main()
    .then(async() => {
        await prisma.$disconnect(); // disconnect from db
    })
    .catch(async(e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });