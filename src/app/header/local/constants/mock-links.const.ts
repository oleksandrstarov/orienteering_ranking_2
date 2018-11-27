import { NavigationLinkModel } from '../../../shared/models/navigation-link.model';
import { NavLinksEnum } from '../../../shared/enums/nav-links.enum';

export const NAV_LINKS: NavigationLinkModel[] = [
  new NavigationLinkModel({ path: NavLinksEnum.Dashboard, label: 'Главная', icon: 'dashboard' }),
  new NavigationLinkModel({ path: NavLinksEnum.Rating, label: 'Рейтинг', icon: 'format_list_numbered' }),
  new NavigationLinkModel({ path: NavLinksEnum.Competition, label: 'Соревнования', icon: 'event_note' }),
  new NavigationLinkModel({ path: NavLinksEnum.AboutRating, label: 'О рейтинге', icon: 'info' })
];
