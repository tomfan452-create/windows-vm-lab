# Windows VM Lab — GitHub Pages

Panel web estático para un laboratorio de máquinas virtuales Windows.

## Importante

GitHub Pages solo sirve archivos estáticos. **No ejecuta QEMU ni Windows**.

Este repositorio contiene la interfaz y la estructura para conectar posteriormente un backend propio que ejecute las máquinas virtuales reales.

## Publicarlo en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `windows-vm-lab`.
2. Sube todos los archivos de este proyecto.
3. En GitHub entra en **Settings → Pages**.
4. En **Build and deployment**, selecciona `Deploy from a branch`.
5. Selecciona la rama `main` y la carpeta `/ (root)`.
6. Guarda y espera a que GitHub publique la página.

## Backend futuro

Para VMs reales se puede añadir un servidor con:
- QEMU/KVM
- API HTTP/WebSocket
- noVNC para la pantalla remota
- discos `.qcow2`
- ISOs de instalación obtenidas legalmente

Los archivos de Windows no están incluidos.
