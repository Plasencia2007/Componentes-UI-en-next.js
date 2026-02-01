"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Line,
  LineChart,
  Area,
  AreaChart,
} from "recharts";
import {
  Terminal,
  AlertTriangle,
  Info,
  CheckCircle2,
  Rocket,
  Search,
  User,
  Settings,
  Mail,
  Plus,
  Command as CommandIcon,
  Check,
  Calendar as CalendarIcon,
  Fingerprint,
  ChevronRight,
  ChevronsUpDown,
  CreditCard,
  Github,
  LifeBuoy,
  LogOut,
  MoreHorizontal,
  Cloud,
  Layers,
  Trash2,
  Copy,
  Share2,
  Eye,
  Send,
  Loader2,
  ExternalLink,
} from "lucide-react";

// Types and Configs
const chartData = [
  { month: "Ene", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Abr", desktop: 73, mobile: 190 },
];

const chartConfig = {
  desktop: { label: "Desktop", color: "oklch(0.609 0.126 221.723)" },
  mobile: { label: "Mobile", color: "oklch(0.645 0.246 16.439)" },
} satisfies ChartConfig;

const formSchema = z.object({
  username: z.string().min(2, "Mínimo 2 caracteres"),
  password: z.string().min(8, "Mínimo 8 caracteres"),
});

export default function Showcase() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [commandOpen, setCommandOpen] = React.useState(false);
  const [otp, setOtp] = React.useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", password: "" },
  });

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 p-6 md:p-12 space-y-16 overflow-x-hidden">
      {/* Header & Breadcrumb */}
      <div className="max-w-7xl mx-auto space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Library</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Documentation</DropdownMenuItem>
                  <DropdownMenuItem>Themes</DropdownMenuItem>
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Super Gallery v12</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-extrabold tracking-tighter">
              The Complete Showcase
            </h1>
            <p className="text-xl text-muted-foreground">
              Explora los 22+ componentes y sus infinitas posibilidades.
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-6"
              onClick={() => setCommandOpen(true)}
            >
              <Search className="mr-2 h-5 w-5" /> Buscar Componente{" "}
              <kbd className="ml-3 text-xs opacity-50 bg-muted px-1.5 py-0.5 rounded border">
                ⌘K
              </kbd>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-24">
        {/* SECTION: ACCIÓN Y FEEDBACK */}
        <section className="space-y-8">
          <div className="border-b pb-4">
            <h2 className="text-3xl font-bold">Botones y Alertas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Buttons - Different Forms */}
            <Card className="flex flex-col shadow-xl hover:ring-1 ring-primary/20 transition-all">
              <CardHeader>
                <CardTitle className="text-lg">Yo soy Button</CardTitle>
                <CardDescription>
                  Mis diferentes estados y variantes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link Style</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button size="sm">Small</Button>
                  <Button size="lg">Large</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                    Cargando...
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 2. Alerts - Different Forms */}
            <Card className="flex flex-col shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Yo soy Alert</CardTitle>
                <CardDescription>
                  Información contextual dinámica.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <Info className="h-4 w-4 text-blue-500" />
                  <AlertTitle>Info</AlertTitle>
                  <AlertDescription>
                    Soy una alerta informativa estándar.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Soy una alerta de error crítico.
                  </AlertDescription>
                </Alert>
                <Alert className="border-green-500">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <AlertTitle>Éxito</AlertTitle>
                  <AlertDescription>
                    ¡Acción completada con éxito!
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* 3. Badges - Different Forms */}
            <Card className="flex flex-col shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Yo soy Badge</CardTitle>
                <CardDescription>
                  Pequeños indicadores visuales.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap items-center justify-center gap-3 py-8">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge className="bg-orange-500 hover:bg-orange-600 border-0">
                  Custom Color
                </Badge>
                <Badge className="rounded-full">Pill Style</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION: NAVEGACIÓN Y MENÚS */}
        <section className="space-y-8">
          <div className="border-b pb-4">
            <h2 className="text-3xl font-bold">Navegación y Menús</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 4. DropdownMenu - Different Forms */}
            <Card className="flex flex-col shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Yo soy Dropdown</CardTitle>
                <CardDescription>
                  Menús desplegables versátiles.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 py-6 items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Menú con Iconos</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" /> Perfil
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard className="mr-2 h-4 w-4" /> Facturación
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" /> Ajustes
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary">Menú con Checks</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuCheckboxItem checked>
                      Mostrar barra
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Panel derecho
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost">Ver Submenús</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        Inspiración
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>Dribbble</DropdownMenuItem>
                          <DropdownMenuItem>Pinterest</DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>

            {/* 5. ContextMenu - Advanced */}
            <Card className="flex flex-col shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Yo soy ContextMenu</CardTitle>
                <CardDescription>
                  Áreas de interacción inteligente.
                </CardDescription>
              </CardHeader>
              <CardContent className="py-6">
                <ContextMenu>
                  <ContextMenuTrigger className="flex h-32 w-full items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-sm italic font-medium">
                    Clic derecho avanzado aquí
                  </ContextMenuTrigger>
                  <ContextMenuContent className="w-64">
                    <ContextMenuItem inset>
                      Atrás <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem inset>
                      Recargar <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuSub>
                      <ContextMenuSubTrigger inset>
                        Desarrollo
                      </ContextMenuSubTrigger>
                      <ContextMenuSubContent className="w-48">
                        <ContextMenuItem>Consola</ContextMenuItem>
                        <ContextMenuItem>Red</ContextMenuItem>
                      </ContextMenuSubContent>
                    </ContextMenuSub>
                    <ContextMenuSeparator />
                    <ContextMenuCheckboxItem checked>
                      Modo Oscuro
                    </ContextMenuCheckboxItem>
                    <ContextMenuRadioGroup value="admin">
                      <ContextMenuLabel inset>Rol</ContextMenuLabel>
                      <ContextMenuRadioItem value="admin">
                        Admin
                      </ContextMenuRadioItem>
                      <ContextMenuRadioItem value="user">
                        User
                      </ContextMenuRadioItem>
                    </ContextMenuRadioGroup>
                  </ContextMenuContent>
                </ContextMenu>
              </CardContent>
            </Card>

            {/* 6. Breadcrumb Variations */}
            <Card className="flex flex-col shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Yo soy Breadcrumb</CardTitle>
                <CardDescription>Rutas de navegación claras.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 py-6">
                <div className="p-2 border rounded bg-background/50">
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>
                        <ChevronRight />
                      </BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbPage>Simple</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
                <div className="p-2 border rounded bg-background/50">
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dash</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>/</BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbEllipsis />
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>/</BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbPage>Settings</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </CardContent>
            </Card>

            {/* 7. Menubar - Different Forms */}
            <Card className="flex flex-col shadow-xl lg:col-span-3">
              <CardHeader>
                <CardTitle className="text-lg">Yo soy Menubar</CardTitle>
                <CardDescription>
                  Barras de menú persistentes con submenús, checks y radios.
                </CardDescription>
              </CardHeader>
              <CardContent className="py-6">
                <Menubar className="w-fit mx-auto">
                  <MenubarMenu>
                    <MenubarTrigger>Archivo</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        Nueva de pestaña <MenubarShortcut>⌘T</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        Nueva ventana <MenubarShortcut>⌘N</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarSub>
                        <MenubarSubTrigger>Compartir</MenubarSubTrigger>
                        <MenubarSubContent>
                          <MenubarItem>Email</MenubarItem>
                          <MenubarItem>Mensaje</MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                      <MenubarSeparator />
                      <MenubarItem>
                        Imprimir... <MenubarShortcut>⌘P</MenubarShortcut>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Editar</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        Deshacer <MenubarShortcut>⌘Z</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                        Rehacer <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Ver</MenubarTrigger>
                    <MenubarContent>
                      <MenubarCheckboxItem checked>
                        Mostrar barra lateral
                      </MenubarCheckboxItem>
                      <MenubarCheckboxItem>
                        Pantalla completa
                      </MenubarCheckboxItem>
                    </MenubarContent>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger>Perfil</MenubarTrigger>
                    <MenubarContent>
                      <MenubarRadioGroup value="admin">
                        <MenubarRadioItem value="admin">
                          Administrador
                        </MenubarRadioItem>
                        <MenubarRadioItem value="editor">
                          Editor
                        </MenubarRadioItem>
                        <MenubarRadioItem value="viewer">
                          Lector
                        </MenubarRadioItem>
                      </MenubarRadioGroup>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </CardContent>
            </Card>

            {/* 8. NavigationMenu - Different Forms */}
            <Card className="flex flex-col shadow-xl lg:col-span-3 overflow-visible">
              <CardHeader>
                <CardTitle className="text-lg">Yo soy NavigationMenu</CardTitle>
                <CardDescription>
                  Menus de navegación fluida con previsualizaciones y links.
                </CardDescription>
              </CardHeader>
              <CardContent className="py-6 flex justify-center">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Componentes</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/"
                              >
                                <Rocket className="h-6 w-6" />
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  shadcn/ui
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  Componentes bellamente diseñados construidos
                                  con Radix UI y Tailwind CSS.
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          <li className="p-2 hover:bg-muted rounded-md transition-colors">
                            <a href="#" className="block h-full w-full">
                              <div className="text-sm font-bold">Alertas</div>
                              <p className="text-xs text-muted-foreground">
                                Te aviso de cosas importantes.
                              </p>
                            </a>
                          </li>
                          <li className="p-2 hover:bg-muted rounded-md transition-colors">
                            <a href="#" className="block h-full w-full">
                              <div className="text-sm font-bold">Cartas</div>
                              <p className="text-xs text-muted-foreground">
                                El contenedor base de todo.
                              </p>
                            </a>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Recursos</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4">
                          <li className="p-2 hover:bg-muted rounded-md transition-colors flex gap-3 items-center">
                            <div className="bg-primary/10 p-2 rounded-full text-primary">
                              <Info className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="text-sm font-bold">
                                Documentación
                              </div>
                              <p className="text-xs text-muted-foreground">
                                Aprende a usar la librería.
                              </p>
                            </div>
                          </li>
                          <li className="p-2 hover:bg-muted rounded-md transition-colors flex gap-3 items-center">
                            <div className="bg-secondary/20 p-2 rounded-full text-secondary-foreground">
                              <Github className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="text-sm font-bold">GitHub</div>
                              <p className="text-xs text-muted-foreground">
                                Explora el código fuente.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        href="#"
                        className={navigationMenuTriggerStyle()}
                      >
                        Documentación
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </CardContent>
            </Card>

            {/* 9. Pagination - Different Forms */}
            <Card className="flex flex-col shadow-xl lg:col-span-3">
              <CardHeader>
                <CardTitle className="text-lg">Yo soy Pagination</CardTitle>
                <CardDescription>
                  Navegación entre páginas de resultados.
                </CardDescription>
              </CardHeader>
              <CardContent className="py-10">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION: DATOS E INTERFAZ */}
        <section className="space-y-8">
          <div className="border-b pb-4">
            <h2 className="text-3xl font-bold">Datos y Visualización</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 7. Charts - Different Forms */}
            <Card className="flex flex-col shadow-xl lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Yo soy Chart</CardTitle>
                  <CardDescription>
                    Visualizando información compleja de 3 formas.
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">Barras</Badge>
                  <Badge variant="outline">Líneas</Badge>
                  <Badge variant="outline">Áreas</Badge>
                </div>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-xs font-bold text-muted-foreground uppercase">
                    Modo Barras
                  </p>
                  <ChartContainer
                    config={chartConfig}
                    className="h-[150px] w-full"
                  >
                    <BarChart data={chartData}>
                      <Bar
                        dataKey="desktop"
                        fill="var(--color-desktop)"
                        radius={4}
                      />
                      <Bar
                        dataKey="mobile"
                        fill="var(--color-mobile)"
                        radius={4}
                      />
                    </BarChart>
                  </ChartContainer>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-muted-foreground uppercase">
                    Modo Área
                  </p>
                  <ChartContainer
                    config={chartConfig}
                    className="h-[150px] w-full"
                  >
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient
                          id="fillDesktop"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        dataKey="desktop"
                        type="natural"
                        fill="url(#fillDesktop)"
                        stroke="var(--color-desktop)"
                      />
                    </AreaChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            {/* 8. Avatar Variations */}
            <Card className="flex flex-col shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Yo soy Avatar</CardTitle>
                <CardDescription>Identidades visuales.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-6 py-6">
                <div className="flex -space-x-3 overflow-hidden">
                  <Avatar className="ring-2 ring-background border-2 border-zinc-200">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <Avatar className="ring-2 ring-background border-2 border-zinc-200">
                    <AvatarImage src="https://github.com/nutlope.png" />
                  </Avatar>
                  <Avatar className="ring-2 ring-background border-2 border-zinc-200">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs font-bold">
                      +5
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" />
                  </Avatar>
                  <Avatar className="h-16 w-16 rounded-lg">
                    <AvatarFallback className="bg-zinc-800 text-zinc-100 rounded-lg">
                      JD
                    </AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION: FORMULARIOS Y SEGURIDAD */}
        <section className="space-y-8">
          <div className="border-b pb-4">
            <h2 className="text-3xl font-bold">Formularios y Seguridad</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 9. Form + Input + Label - Complete Forms */}
            <Card className="flex flex-col shadow-2xl lg:col-span-2 bg-zinc-900 text-white border-zinc-800">
              <CardHeader>
                <CardTitle className="text-xl">Yo soy Form</CardTitle>
                <CardDescription className="text-zinc-400">
                  Validación reactiva, accesibilidad y diseño dark.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit((v) =>
                      alert(JSON.stringify(v)),
                    )}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-300">
                            Usuario
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="@nombre"
                              className="bg-zinc-800 border-zinc-700 text-white focus:ring-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-300">
                            Contraseña
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="••••••••"
                              className="bg-zinc-800 border-zinc-700 text-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="md:col-span-2">
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-xl"
                      >
                        <Send className="mr-2 h-5 w-5" /> Enviar Credenciales
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* 10. OTP Input - Different Forms */}
            <Card className="flex flex-col shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Yo soy InputOTP</CardTitle>
                <CardDescription>Verificación en dos pasos.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-6 py-8">
                <div className="space-y-2">
                  <p className="text-xs text-center font-bold text-muted-foreground uppercase tracking-widest">
                    Código de 4
                  </p>
                  <InputOTP maxLength={4}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-center font-bold text-muted-foreground uppercase tracking-widest">
                    Código Grupal
                  </p>
                  <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION: ELEMENTOS INTERACTIVOS */}
        <section className="space-y-8">
          <div className="border-b pb-4">
            <h2 className="text-3xl font-bold">Interactividad Avanzada</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 11. Modal Dialogs */}
            <Card className="flex flex-col shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Yo soy Dialog</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Modal Simple
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Aviso</DialogTitle>
                      <DialogDescription>
                        Soy un modal minimalista.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" className="w-full">
                      Acción Crítica
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>¿Seguro?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Soy un diálogo de alerta irreversible.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogAction>Eliminar</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>

            {/* 12. Drawer Variations */}
            <Card className="flex flex-col shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Yo soy Drawer</CardTitle>
              </CardHeader>
              <CardContent>
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button className="w-full bg-zinc-800 hover:bg-zinc-700">
                      Explorar Drawer
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-lg p-6 space-y-4">
                      <DrawerHeader>
                        <DrawerTitle>Configuraciones Móviles</DrawerTitle>
                        <DrawerDescription>
                          Usa gestos para cerrarme.
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline">
                          <Mail className="mr-2" /> Email
                        </Button>
                        <Button variant="outline">
                          <Settings className="mr-2" /> Ajustes
                        </Button>
                      </div>
                      <DrawerFooter>
                        <DrawerClose asChild>
                          <Button className="w-full">Todo listo</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </Drawer>
              </CardContent>
            </Card>

            {/* 13. HoverCard Variations */}
            <Card className="flex flex-col shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Yo soy HoverCard</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center py-6">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="cursor-help p-2 border-b-2 border-primary inline-flex gap-2 items-center">
                      <Eye className="h-4 w-4" /> Info rápida
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-64 p-4 border-2 border-primary/20 bg-primary/5">
                    <div className="flex flex-col gap-2">
                      <p className="text-xs font-bold uppercase text-primary">
                        Previsualización
                      </p>
                      <p className="text-sm">
                        Muestro detalles técnicos o perfiles al solo flotar el
                        mouse.
                      </p>
                      <Badge className="w-fit">Live Info</Badge>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </CardContent>
            </Card>

            {/* 14. Command - Global Actions */}
            <Card className="flex flex-col shadow-xl bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-lg">Yo soy Command</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-4">
                <CommandIcon className="h-12 w-12 mb-4 animate-pulse" />
                <p className="text-xs text-center opacity-80">
                  Pulsa el botón o usa el atajo ⌘K
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-4"
                  onClick={() => setCommandOpen(true)}
                >
                  Ejecutar
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION: OTROS COMPONENTES */}
        <section className="space-y-8">
          <div className="border-b pb-4">
            <h2 className="text-3xl font-bold">Continuidad y Detalle</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 15. Accordion - Multiple vs Single */}
            <Card className="flex flex-col shadow-xl lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Yo soy Accordion</CardTitle>
                <CardDescription>
                  Colapsando información por secciones.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <p className="text-xs font-bold text-muted-foreground uppercase italic">
                    Modo Único
                  </p>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Opción A</AccordionTrigger>
                      <AccordionContent>
                        Solo puedo estar abierto yo.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Opción B</AccordionTrigger>
                      <AccordionContent>
                        Al hacerme clic, cerraré A.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-muted-foreground uppercase italic">
                    Modo Múltiple
                  </p>
                  <Accordion type="multiple" className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Fisica</AccordionTrigger>
                      <AccordionContent>
                        Podemos estar todos abiertos.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Química</AccordionTrigger>
                      <AccordionContent>¡Pruébalo ahora!</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
            </Card>

            {/* 16. AspectRatio - Geometric Forms */}
            <Card className="flex flex-col shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Yo soy AspectRatio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <AspectRatio
                  ratio={16 / 9}
                  className="bg-zinc-100 dark:bg-zinc-800 rounded-md flex items-center justify-center text-[10px] font-bold"
                >
                  16:9 HD
                </AspectRatio>
                <AspectRatio
                  ratio={1 / 1}
                  className="bg-zinc-200 dark:bg-zinc-700 rounded-md flex items-center justify-center text-[10px] font-bold"
                >
                  1:1 Square
                </AspectRatio>
              </CardContent>
            </Card>

            {/* 17. Checkbox & Collapsible Mix */}
            <Card className="flex flex-col shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg">Yo soy Checkbox</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-2 p-2 rounded bg-muted/40">
                  <Checkbox id="c1" defaultChecked />
                  <label htmlFor="c1" className="text-sm">
                    Habilitado
                  </label>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded opacity-50">
                  <Checkbox id="c2" disabled />
                  <label htmlFor="c2" className="text-sm">
                    Desactivado
                  </label>
                </div>
                <div className="border-t pt-2">
                  <Collapsible>
                    <CollapsibleTrigger className="text-xs font-bold text-primary flex items-center gap-1">
                      <Plus className="h-3 w-3" /> Ver más Yo soy Collapsible
                    </CollapsibleTrigger>
                    <CollapsibleContent className="text-[10px] mt-2 bg-zinc-50 border rounded p-2">
                      ¡Aparezco mágicamente!
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION: CAROUSEL & FINAL */}
        <section className="space-y-8 pb-12">
          <div className="border-b pb-4">
            <h2 className="text-3xl font-bold">Experiencia Envolvente</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* 18. Carousel - Advanced Layout */}
            <div className="lg:col-span-8">
              <Card className="shadow-2xl overflow-hidden border-0 bg-zinc-50 dark:bg-zinc-900">
                <CardHeader>
                  <CardTitle>Yo soy Carousel</CardTitle>
                  <CardDescription>
                    Navegación por diapositivas con controles premium.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-12">
                  <Carousel className="w-full">
                    <CarouselContent className="-ml-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <CarouselItem
                          key={i}
                          className="pl-4 md:basis-1/2 lg:basis-1/3"
                        >
                          <Card className="border-0 shadow-lg bg-white dark:bg-zinc-800 group overflow-hidden">
                            <CardContent className="flex aspect-square items-center justify-center p-6 transition-transform group-hover:scale-110">
                              <Rocket className="h-10 w-10 text-primary mb-2" />
                              <span className="text-2xl font-black">V{i}</span>
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-6 h-12 w-12 bg-primary text-primary-foreground hover:bg-primary/90" />
                    <CarouselNext className="-right-6 h-12 w-12 bg-primary text-primary-foreground hover:bg-primary/90" />
                  </Carousel>
                </CardContent>
              </Card>
            </div>

            {/* 19. Calendar - Final Touch */}
            <div className="lg:col-span-4">
              <Card className="shadow-2xl border-primary/10">
                <CardHeader>
                  <CardTitle>Yo soy Calendar</CardTitle>
                  <CardDescription>Gestión de tiempos.</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center flex-col items-center gap-4">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-xl border shadow-inner bg-background"
                  />
                  <Badge variant="outline" className="py-1 px-4 border-2">
                    Fecha: {date?.toLocaleDateString()}
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      {/* Command Dialog - Global */}
      <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
        <CommandInput placeholder="Acciones Rápidas (Ej: /perfil, /ajustes)..." />
        <CommandList className="max-h-[400px]">
          <CommandEmpty>No hay coincidencias.</CommandEmpty>
          <CommandGroup heading="Herramientas">
            <CommandItem className="py-3">
              <Layers className="mr-3 h-5 w-5" /> <span>Componentes UI</span>
              <CommandShortcut>⌘U</CommandShortcut>
            </CommandItem>
            <CommandItem className="py-3">
              <User className="mr-3 h-5 w-5" /> <span>Mi Perfil</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Configuración">
            <CommandItem className="py-3">
              <Settings className="mr-3 h-5 w-5" />{" "}
              <span>Ajustes de Sistema</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
            <CommandItem className="py-3 text-destructive">
              <LogOut className="mr-3 h-5 w-5" /> <span>Cerrar Sesión</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      <footer className="max-w-7xl mx-auto py-20 text-center border-t border-zinc-200 dark:border-zinc-800">
        <div className="inline-flex items-center gap-3 bg-zinc-200 dark:bg-zinc-800 px-6 py-2 rounded-full mb-6">
          <Rocket className="h-6 w-6 text-primary animate-bounce" />
          <span className="font-black text-xl tracking-tight">
            V12 DESIGN SYSTEM
          </span>
        </div>
        <p className="text-muted-foreground text-lg mb-8">
          Todos los componentes han sido optimizados para accesibilidad,
          rendimiento y belleza extrema.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="ghost" size="sm" className="rounded-full">
            <Github className="mr-2" /> GitHub
          </Button>
          <Button variant="ghost" size="sm" className="rounded-full">
            <ExternalLink className="mr-2" /> Docs
          </Button>
        </div>
      </footer>
    </div>
  );
}
