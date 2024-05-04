"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { headers } from "next/headers";
import { useRouter } from "next/navigation";

const deleteData = async (url: string) => {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const CancelReservation = ({ reservation }: { reservation: any }) => {
  const router = useRouter();
  const cancelReservation = (id: number) => {
    deleteData(`http://127.0.0.1:1337/api/reservations/${id}`);
    router.refresh();
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={"md"}>Cancel Reservation</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        {/* header */}
        <AlertDialogHeader>
          <AlertDialogTitle>Are You absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* dialog footer */}
        <AlertDialogFooter>
          <AlertDialogCancel>Dismiss</AlertDialogCancel>
          <AlertDialogAction onClick={() => cancelReservation(reservation.id)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CancelReservation;
