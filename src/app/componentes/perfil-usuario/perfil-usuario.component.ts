import { Component, signal } from '@angular/core';
import { CurrencyPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { PerfilUsuario } from '../../models/perfil.model';

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, JsonPipe, UpperCasePipe],
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent {
  // Datos del objeto estándar para explorar propiedades simples y anidadas.
  usuario: PerfilUsuario = {
    id: 101,
    nombreCompleto: 'Ana María Martínez',
    correo: 'ana.martinez@email.com',
    telefono: null,
    fechaRegistro: new Date(2024, 2, 15),
    salarioEstimado: 3500.50,
    activo: true,
    ubicacion: {
      ciudad: 'Madrid',
      pais: 'España',
      direccionAnidada: { calle: 'Avenida Gran Vía', numero: 120 }
    },
    redesSociales: { github: 'github.com/anamartinez' }
  };

  // El objeto inicia en null para probar navegación segura (?.).
  usuarioAsincrono: PerfilUsuario | null = null;
  cargando = false;
  consultas = 0;
  private identificadorCarga: ReturnType<typeof setTimeout> | null = null;

  // Signal con un objeto completo; cambios mediante update() y set().
  usuarioSignal = signal<PerfilUsuario>({
    id: 202,
    nombreCompleto: 'Carlos Eduardo Gómez',
    correo: 'carlos.gomez@email.com',
    telefono: '+34 600 123 456',
    fechaRegistro: new Date(2025, 0, 10),
    salarioEstimado: 4200.00,
    activo: true,
    ubicacion: { ciudad: 'Barcelona', pais: 'España' }
  });

  // Retraso local de 2 segundos para representar una respuesta asíncrona.
  // No se realiza una petición HTTP real en esta práctica.
  cargarDatosHTTP(): void {
    if (this.cargando) return;
    this.usuarioAsincrono = null;
    this.cargando = true;
    this.consultas += 1;
    this.identificadorCarga = setTimeout(() => {
      this.usuarioAsincrono = {
        id: 303,
        nombreCompleto: 'Laura Restrepo',
        correo: 'laura.restrepo@email.com',
        telefono: '+57 311 987 6543',
        fechaRegistro: new Date(),
        salarioEstimado: 2800.00,
        activo: false,
        ubicacion: { ciudad: 'Bogotá', pais: 'Colombia' }
      };
      this.cargando = false;
      this.identificadorCarga = null;
    }, 2000);
  }

  limpiarDatosAsincronos(): void {
    if (this.identificadorCarga !== null) {
      clearTimeout(this.identificadorCarga);
      this.identificadorCarga = null;
    }
    this.usuarioAsincrono = null;
    this.cargando = false;
  }

  cambiarEstadoSignal(): void {
    this.usuarioSignal.update(perfil => ({ ...perfil, activo: !perfil.activo }));
  }

  cambiarCiudadSignal(): void {
    this.usuarioSignal.update(perfil => ({
      ...perfil,
      ubicacion: {
        ...perfil.ubicacion,
        ciudad: perfil.ubicacion.ciudad === 'Barcelona' ? 'Valencia' : 'Barcelona'
      }
    }));
  }

  restaurarSignal(): void {
    this.usuarioSignal.set({
      id: 202,
      nombreCompleto: 'Carlos Eduardo Gómez',
      correo: 'carlos.gomez@email.com',
      telefono: '+34 600 123 456',
      fechaRegistro: new Date(2025, 0, 10),
      salarioEstimado: 4200.00,
      activo: true,
      ubicacion: { ciudad: 'Barcelona', pais: 'España' }
    });
  }
}
