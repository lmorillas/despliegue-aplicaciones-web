---
title: "DNS"

date: 2021-10-21T10:29:17+02:00
weight: 3
description: >
  Componentes internet
---

{{% pageinfo %}}
## Contenidos
* DNS
{{% /pageinfo %}}


## Conceptos básicos de DNS

{{< figure src="https://d1.awsstatic.com/Route53/how-route-53-routes-traffic.8d313c7da075c3c7303aaef32e89b5d0b7885e7c.png" title="Ejemplo de AWS 53" >}}

* [DNS en Wikipedia](https://en.wikipedia.org/wiki/Domain_Name_System)
* [Conceptos básicos de DNS - AWS](https://aws.amazon.com/es/route53/what-is-dns/)
* [Cómo funciona DNS - AWS](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-dns-service.html)
* [Conceptos DNS - AWS](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-concepts.html)
* [Archivo hosts](https://en.wikipedia.org/wiki/Hosts_(file))

## Herramientas
### dig
* https://www.hostinger.es/tutoriales/comando-dig-linux

## Tareas
* Lee los artículos que te indicamos. 
* Comprueba si la máquina virtual que has instalado tiene el comando `dig` instalado. Si no lo tiene, instálalo como se explica en el artículo anterior.
* Ejecuta los ejemplos del artículo anterior usando como referencia el nombre de la web del curso `https://www.adistanciafparagon.es/` . Anota los comandos que usas y sus resultados en un archivo markdown. Lo usarás más adelante.
* Crea una entrada en el archivo hosts de tu ordenador para que cuando se acceda a la dirección `miservidor.local` se redirija a la dirección `localhost` o `127.0.0.1`. Comprueba que funciona.