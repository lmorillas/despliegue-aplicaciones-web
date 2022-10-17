
---
title: "Entorno - Vagrant"
linkTitle: "Vagrant"
weight: 5
date: 2021-09-15
description: 
  
---

{{% pageinfo %}}
### Objetivos:
* ¿Cómo podemos tener un sistema para desarrollar una aplicación que sea el mismo que se va a usar en producción?
* ¿Cómo replicar un servidor si tenemos que moverlo a otra máquina? ¿Hay que hacerlo a mano perdiendo varias horas y arriesgándonos a cometer errores?
{{% /pageinfo %}}

De **virtualización** y de **Virtualbox** ya habéis oído hablar en el módulo de sistemas operativos.

## Virtualización - Virtualbox - Vagrant

* https://en.wikipedia.org/wiki/Virtualization

## Introduccíón a Virtualbox

* https://www.oracle.com/es/virtualization/virtualbox/
* https://www.oracle.com/a/ocom/docs/virtualbox-for-dummies.pdf

## Introducción a Vagrant

> Lectura recomendada: https://automationrhapsody.com/what-is-vagrant-and-why-to-use-it/

* https://www.vagrantup.com/
* https://desarrolloweb.com/articulos/trabajar-con-vagrant.html

**Vagrant** es una herramienta para construir y administrar entornos de máquinas virtuales.

Con un flujo de trabajo fácil de usar y un enfoque en la automatización, Vagrant reduce el tiempo de configuración del entorno de desarrollo, aumenta la paridad de producción y hace que la excusa "funciona en mi máquina" sea una reliquia del pasado. Vagrant es conveniente para compartir la configuración y configuración del entorno virtual.


Vagrant **no proporciona motores de virtualización**, sino que se basa en otros:  VirtualBox (proveedor predeterminado), VMWare , Hyper-V o Docker.

Con Vagrant podemos instalar y activar una máquina virtual, configurarla e instala el software necesario. Todas esas acciones se describen en un solo archivo de texto (`Vagrantfile`), que se puede compartir entre los miembros del equipo, lo que permite que todos tengan la misma configuración.


Vagrant permite compartir configuraciones entre los miembros del equipo para facilitar la puesta en marcha de un entorno de trabajo.

