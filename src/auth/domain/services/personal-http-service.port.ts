export interface PersonalHttpServicePort {
  getPersonal();
  getPersonalById();
  createPersonal();
  updatePersonal();
  deletePersonal();
}
export const PersonalHttpServicePort = Symbol('PersonalHttpServicePort');
