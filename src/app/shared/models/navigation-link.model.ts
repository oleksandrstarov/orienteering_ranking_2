export class NavigationLinkModel {
  path: string;
  label: string;

  constructor (data: any) {
    Object.assign(this, data);
  }
}
