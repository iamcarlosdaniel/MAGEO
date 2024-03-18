# SIGEMUV
## Sistema de Gestión Integral de Eventos y Marketing de la Universidad del Valle

## Introduccion
En un entorno dinámico y con mucho trafico de solicitudes para diversas actividades, la eficiencia de la gestión de eventos es crucial para el área de Marketing. Es crucial para mantenerse relevante y atractivo para la comunidad estudiantil, personas externas y stakeholders. Conscientes de esta necesidad, el área de marketing de Univalle ha identificado la oportunidad de mejorar sus procesos mediante el desarrollo de una plataforma digital dedicada a la gestión y coordinación de eventos dentro de la universidad. 

## Problematica
Actualmente, la Univalle enfrenta desafíos en la organización de eventos debido a la falta de una herramienta integral y optimizada para la gestión de los mismos. Los métodos tradicionales de coordinación, que dependen principalmente de comunicaciones manuales y procesos en papel, resultan poco eficientes y propensos a errores. Esto conlleva a una pérdida de tiempo y recursos, así como a una experiencia subóptima tanto para los organizadores como para los participantes de los eventos. 

## Alcance del Sistema
El proyecto se enfocará en el desarrollo de una página web dedicada al manejo y coordinación de eventos en la Universidad Univalle, diseñada específicamente para el área de marketing. La plataforma permitirá a los usuarios solicitar, planificar y coordinar eventos de manera eficiente y centralizada. Algunas de las funcionalidades clave incluirán: 

- Registro y solicitud de eventos: Los usuarios podrán registrar nuevos eventos a través de un formulario en línea, proporcionando detalles como la fecha, hora, ubicación y objetivos del evento. 

- Gestión de calendario: La plataforma ofrecerá un calendario interactivo donde se mostrarán todos los eventos programados, permitiendo una mejor visualización y planificación. 

- Seguimiento de solicitudes: Los organizadores podrán dar seguimiento al estado de sus solicitudes de eventos, desde la presentación inicial hasta la aprobación final. 

- Comunicación y notificaciones: Se implementarán herramientas de comunicación interna para facilitar la coordinación entre los diferentes equipos involucrados en la organización de eventos. Por ejemplo, si alguien se equivocó rellenando uno de los formularios, deberá pedir permiso para poder editarlo. 

- Login: para mantener la información privada y restringida únicamente a usuarios autorizados, se implementará un sistema de login. Esto garantizará que solo personas autorizadas puedan acceder a la plataforma y realizar acciones relacionadas con la gestión de eventos. El login también permitirá la asignación de roles y permisos específicos, asegurando un acceso controlado a la información y funcionalidades de la plataforma.

## Tecnologias

El proyecto se encuentra en fase de desarrollo y se está construyendo con Node.js como entorno de ejecución del lado del servidor. Para facilitar la creación de API y rutas, estamos empleando Express.js, un framework minimalista y flexible que ofrece una sólida base para el desarrollo web.

En cuanto a la seguridad y autenticación, hemos integrado JSON Web Tokens (JWT), una tecnología estándar en la industria que nos permite gestionar la autenticación de usuarios de manera segura y eficiente. JWT nos brinda la capacidad de generar tokens de acceso firmados digitalmente, que pueden ser utilizados para verificar la identidad de los usuarios en cada solicitud sin necesidad de almacenar información de sesión en el servidor.

En el lado del cliente, hemos optado por utilizar React.js, una biblioteca de JavaScript de código abierto mantenida por Facebook. React.js nos permite crear interfaces de usuario interactivas y dinámicas de manera eficiente, mediante la construcción de componentes reutilizables que gestionan su propio estado. Esto facilita el desarrollo de una aplicación de una sola página (SPA) altamente modular y escalable.

Para estilizar nuestra aplicación y garantizar una experiencia de usuario atractiva y coherente, estamos aprovechando Tailwind CSS. Tailwind CSS es un framework de CSS utility-first que nos permite construir rápidamente interfaces de usuario personalizadas mediante la aplicación de clases predefinidas que encapsulan estilos específicos.

En resumen, estamos utilizando un conjunto de tecnologías modernas y robustas para desarrollar una plataforma web segura, eficiente y altamente interactiva, con un enfoque en la modularidad, la escalabilidad y la experiencia del usuario.
