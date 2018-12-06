import { NavigationLinkModel } from '../../../shared/models/navigation-link.model';
import { NavLinksEnum } from '../../../shared/enums/nav-links.enum';

export const USER_NAV_LINKS: NavigationLinkModel[] = [
  new NavigationLinkModel({ path: NavLinksEnum.Dashboard, label: 'Главная', icon: 'dashboard' }),
  new NavigationLinkModel({ path: NavLinksEnum.Rating, label: 'Рейтинг', icon: 'format_list_numbered' }),
  new NavigationLinkModel({ path: NavLinksEnum.Competition, label: 'Соревнования', icon: 'event_note' }),
  new NavigationLinkModel({ path: NavLinksEnum.AboutRating, label: 'О рейтинге', icon: 'info' })
];

export const ADMIN_NAV_LINKS: NavigationLinkModel[] = [
  new NavigationLinkModel({ path: NavLinksEnum.AdminRating, label: 'Учасники', icon: 'format_list_numbered' }),
  new NavigationLinkModel({ path: NavLinksEnum.AdminCompetition, label: 'Забеги', icon: 'event_note' })
];
