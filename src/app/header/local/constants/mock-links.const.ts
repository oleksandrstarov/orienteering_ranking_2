import { NavigationLinkModel } from '../../../shared/models/link.model';
import { NavLinksEnum } from '../../../shared/enums/nav-links.enum';

export const NAV_LINKS: NavigationLinkModel[] = [
  new NavigationLinkModel({ path: NavLinksEnum.Dashboard, label: 'Главная' }),
  new NavigationLinkModel({ path: NavLinksEnum.Rating, label: 'Рейтинг' }),
  new NavigationLinkModel({ path: NavLinksEnum.Competition, label: 'Соревнования' }),
  new NavigationLinkModel({ path: NavLinksEnum.AboutRating, label: 'О рейтинге' })
];
