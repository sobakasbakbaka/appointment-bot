-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "coast" INTEGER NOT NULL,
    "service" TEXT NOT NULL,
    "description" TEXT,
    "comment" TEXT,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);
