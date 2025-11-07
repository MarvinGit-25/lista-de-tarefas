import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  List,
  Check,
  NotebookPen,
  SquarePen,
  Trash2,
  ListCheck,
  Sigma,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg">
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar tarefa" />
          <Button className="cursor-pointer">
            <Plus />
            Cadastrar
          </Button>
        </CardHeader>
        <Separator />
        <CardContent>
          <div className="flex gap-2">
            <Badge className="cursor-pointer" variant="default">
              <List />
              Todas
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <NotebookPen />
              Não finalizadas
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <Check />
              Concluidas
            </Badge>
          </div>
          <div className="my-4 border-b-1">
            <div className="h-14 flex justify-between items-center border-t-1">
              <div className="w-1 h-full bg-green-300"></div>
              <p className="flex-1 px-2 text-sm">Estudar React</p>
              <div className=" flex gap-2 items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <SquarePen size={16} className="cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar Tarefa</DialogTitle>
                    </DialogHeader>
                    <div className="flex gap-2 ">
                      <input
                        className="w-full"
                        placeholder="Editar tarefa"
                        type="text"
                      />
                      <Button className="cursor-pointer">editar</Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Trash2 size={16} className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <ListCheck size={18} />
              <p className="text-xs">Tarefas Concluídas 3/3</p>
            </div>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="flex h-6 cursor-pointer border-1 rounded-md items-center p-2 text-xs font-medium">
                  <Trash2 size={16} />
                  Limpar tarefas Concluídas
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    tem certeza que deseja x tarefa?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>sim</AlertDialogAction>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className="h-3 w-full bg-gray-100 mt-4 rounded-md ">
            <div className="h-full w-1/2 bg-amber-300 rounded-md"></div>
          </div>
          <div className="flex justify-end items-center gap-2 mt-2">
            <Sigma size={18} />
            <p className="text-xs">3 tarefas no total</p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default Home;
