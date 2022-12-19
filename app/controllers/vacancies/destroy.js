import DestroyController from 'amber-ui/controllers/application/destroy';

export default class VacancyDestroyController extends DestroyController {
  successTransitionTarget = 'vacancies.index';
  cancelTransitionTarget = 'vacancies.show';
}
