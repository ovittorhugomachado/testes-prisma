-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password_hash" VARCHAR(30) NOT NULL,
    "date_birth" DATE NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL,
    "phone" VARCHAR(15) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
