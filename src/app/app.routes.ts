import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { Estacin1RecepcinYRegistroComponent } from './estacin-1-recepcin-y-registro/estacin-1-recepcin-y-registro.component';
import { Estacin2EducacinYEmpoderamientoComponent } from './estacin-2-educacin-y-empoderamiento/estacin-2-educacin-y-empoderamiento.component';
import { Estacin3TriajeYSignosVitalesComponent } from './estacin-3-triaje-y-signos-vitales/estacin-3-triaje-y-signos-vitales.component';
import { Estacin4EvaluacinMdicaEspecializadaComponent } from './estacin-4-evaluacin-mdica-especializada/estacin-4-evaluacin-mdica-especializada.component';
import { Estacin5ResultadosYOrientacinFinalComponent } from './estacin-5-resultados-y-orientacin-final/estacin-5-resultados-y-orientacin-final.component';
import { DetalleDelPacienteComponent } from './detalle-del-paciente/detalle-del-paciente.component';
import { MduloDeAdministradorComponent } from './mdulo-de-administrador/mdulo-de-administrador.component';

export const routes: Routes = [
  { path: '', redirectTo: 'estacin-1-recepcin-y-registro', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'estacin-1-recepcin-y-registro', component: Estacin1RecepcinYRegistroComponent, data: { text: 'Estacin-1-Recepcin-Yregistro' } },
  { path: 'estacin-2-educacin-y-empoderamiento', component: Estacin2EducacinYEmpoderamientoComponent, data: { text: 'Estacin-2-Educacin-Yempoderamiento' } },
  { path: 'estacin-3-triaje-y-signos-vitales', component: Estacin3TriajeYSignosVitalesComponent, data: { text: 'Estacin-3-Triaje-Ysignos-Vitales' } },
  { path: 'estacin-4-evaluacin-mdica-especializada', component: Estacin4EvaluacinMdicaEspecializadaComponent, data: { text: 'Estacin-4-Evaluacin-Mdica-Especializada' } },
  { path: 'estacin-5-resultados-y-orientacin-final', component: Estacin5ResultadosYOrientacinFinalComponent, data: { text: 'Estacin-5-Resultados-Yorientacin-Final' } },
  { path: 'detalle-del-paciente', component: DetalleDelPacienteComponent, data: { text: 'Detalle-Del-Paciente' } },
  { path: 'mdulo-de-administrador', component: MduloDeAdministradorComponent, data: { text: 'Mdulo-De-Administrador' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
