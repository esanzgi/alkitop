export const APP_URL = 'http://127.0.0.1:8000'

export const PUBLIC_IMAGES_URL = APP_URL + '/images/'
export const PUBLIC_AVATARS_URL = '/avatars/'

export const DEFAULT_USER_PROFILE = 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'

export const allCategories = [
  'Kotxeak',
  'TB, audioa, argazkia',
  'Kontsolak eta bideojokoak',
  'Motorrak',
  "Etxea eta Jardin",
  'Bizikletak',
  'Eraikuntza eta Erreformak',
  'Motorra eta osagarriak',
  'Informatika eta Elektronika',
  'Etxetresna elektrikoak',
  'Industria eta Nekazaritza',
  'Moda eta osagarriak',
  'Kirola eta aisialdia',
  'Zinema, Liburuak eta Musika',
  'Inmobiliaria',
  'Elurra',
  'Zerbitzuak',
  'Musika'
]

export const roles = {
  'admin': 1,
  'moderator': 2,
  'user': 3,
  'owner': 4,
};


export function traducirFrecuencia(frequency) {
  switch (frequency) {
    case "daily":
      return "eguna";
    case "weekly":
      return "astea";
    case "monthly":
      return "hilabetea";
    default:
      return frequency; // Mantén el valor original si no hay traducción definida
  }
}