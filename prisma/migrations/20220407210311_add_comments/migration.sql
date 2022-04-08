-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" VARCHAR(255) NOT NULL,
    "author" VARCHAR(20) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);
