
---
title: "Práctica - Vagrant"
linkTitle: "Práctica Vagrant"
weight: 10
date: 2021-09-15
description: >
    Práctica de Vagrant guiada
  
---

{{% pageinfo %}}
### Objetivos:
* Instalar una máquina básica usando Vagrant - Virtualbox

{{% /pageinfo %}}

## Requisitos

Instala Virtualbox y Vagrant en tu máquina

## Instalar una máquina Ubuntu 22.04

* Crea un directorio para tu proyecto
* Dentro de ese diretorio ejecuta:

```shell
vagrant init bento/ubuntu-22.04
```
> Revisa el contenido del archivo `Vagrantfile` que se ha creado

* Pon en marcha la máquina virtual

```shell
C:\> vagrant up
```

> Revisa el contenido del log para ver que todo ha funcionado correctamente

*  Conecta por ssh con la máquina virtual creada

```shell
C:\> vagrant ssh
```

*  Comprueba el contenido del directorio `/vagrant` de la máquina virtual

```shell
$ ls /vagrant
```
> Vagrant de forma automática mapea el directorio local de la máquina host con el directorio `/vagrant` de la máquina virtual

*  Sal de la máquina virtual

```shell
$ exit()
```

*  Apaga la máquina virtual

```shell
C:\> vagrant halt
```
