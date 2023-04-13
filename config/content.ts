import { LocalizedString } from "@/types/i18n"

export type CourseSection = {
  id: string;
  title: LocalizedString
  slug: string
  sections: {
  id: string;
  title: LocalizedString
    slug: string  
    subItems: {
      id: string;
      title: LocalizedString
      slug: string
    }[]
  }[]
}

export const courseContent = <CourseSection[]>[
  {
    id: "introduction",
    title: {
      "en-US": "Introduction",
      "es-ES": "Introducción"
    },
    slug: "/course/introduction",
    sections: [
      {
        id: "overview",
        title: {
          "en-US":  "Course Overview",
          "es-ES": "Resumen del Curso"
        },
        slug: "/course/introduction/overview",
      },
      {
        id: "programming-fundamentals",
        title: {
          "en-US":"Programming Fundamentals",
          "es-ES": "Fundamentos de la Programación"
        },
        slug: "/course/introduction/programming-fundamentals",
        subItems: [
          {
        id: "variables-data-types",
        title: {
              "en-US": "Variables, Constants and Data Types",
              "es-ES": "Variables, Constantes y Tipos de Datos"
            },
            slug: "/course/introduction/programming-fundamentals/variables-data-types",
          },
          {
            id: "operators",
            title: {
              "en-US": "Operators and Expressions",
              "es-ES": "Operadores y Expresiones"
            },
            slug: "/course/introduction/programming-fundamentals/operators",
          },
          {
            id: "control-structures",
            title: {
              "en-US": "Control Structures: Conditionals and Loops",
              "es-ES": "Estructuras de Control: Condicionales y Bucles"
            },
            slug: "/course/introduction/programming-fundamentals/control-structures",
          },
          {
            id: "functions",
            title: {
              "en-US": "Functions and Modular Programming",
              "es-ES": "Funciones y Programación Modular"
            },
            slug: "/course/introduction/programming-fundamentals/functions",
          },
        ],
      },
      {
        id: "intro-to-oop",
        title: {
          "en-US":"Object-Oriented Programming",
          "es-ES": "Programación Orientada a Objectos"
        },
        slug: "/course/introduction/intro-to-oop",
        subItems: [
          {
        id: "classes-objects",
        title: {
              "en-US":"Classes, Objects, and Instances",
              "es-ES": "Clases, Objectos e Instancias"
            },
            slug: "/course/introduction/intro-to-oop/classes-objects",
          },
          {
        id: "inheritance",
        title: {
              "en-US":"Inheritance, Encapsulation, and Polymorphism",
              "es-ES": "Herencia, Encapsulamiento y Polimorfismo"
            },
            slug: "/course/introduction/intro-to-oop/inheritance",
          },
          {
        id: "oop-design-principles",
        title: {
              "en-US":"Object-Oriented Design Principles",
              "es-ES": "Principios de Diseño Orientado a Objetos"
            },
            slug: "/course/introduction/intro-to-oop/oop-design-principles",
          },
        ],
      },
      {
        id: "algorithms-data-structures",
        title: {
          "en-US":"Algorithms and Data Structures",
          "es-ES": "Algoritmos y Estructuras de Datos"
        },
        slug: "/course/introduction/algorithms-data-structures",
        subItems: [
          {
            id: "intro-to-algorithms",
            title: {
              "en-US":"Introduction to Algorithms",
              "es-ES": "Introducción a Algoritmos"
            },
            slug: "/course/introduction/algorithms-data-structures/intro-to-algorithms",
          },
          {
            id: "basic-data-structures",
            title: {
              "en-US":"Basic Data Structures: Arrays, Lists, Stacks, Queues",
              "es-ES": "Estructuras de Datos Básicas: Arrays, Listas, Pilas, Colas"
            },
            slug: "/course/introduction/algorithms-data-structures/basic-data-structures",
          },
        ],
      },
      {
        id: "summary-review-1",
        title: {
          "en-US":"Summary and Review",
          "es-ES": "Revisión"
        },
        slug: "/course/introduction/summary-review-1",
      },
    ],
  },
  {
    id: "programming",
    title: {
      "en-US":"10x Programming",
      "es-ES": "Programación 10x"
    },
    slug: "/course/programming",
    sections: [
    
    ],
  },
]
