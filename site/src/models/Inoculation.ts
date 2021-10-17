export interface Inoculation {
  idType: string            // CC, CE
  idNumber: string

  fullName: string
  dateOfVaccination: string // 2021-08-01

  number: string            // Primera
  vaccineBatch: string      // 055D21A
  vaccine: string           // MODERNA SWITZERLAND GMBH

  administeringCentre: string  // MEDELLIN SINERGIA Salud Atención Básica Belén
  countryOfVaccination: string // CO-Colombia
}
