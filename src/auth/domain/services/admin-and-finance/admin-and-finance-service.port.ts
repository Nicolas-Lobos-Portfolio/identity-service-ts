export interface AdminAndFinanceHttpServicePort {
  getAdminAndFinance();
  getAdminAndFinanceById();
  createAdminAndFinance();
  updateAdminAndFinance();
  deleteAdminAndFinance();
}
export const AdminAndFinanceHttpServicePort = Symbol(
  'AdminAndFinanceHttpServicePort',
);
