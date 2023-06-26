

interface BreadcrumbItem {
  title: string;
  disabled?: boolean;
  href: string;
}

const home: BreadcrumbItem = {
  title: 'Главная',
  disabled: false,
  href: '/',
};

export const useBreadcrumbs = () => {

  const crumbs = useState<BreadcrumbItem[]>('breadcrumbs',
    () => [{ ... home, disabled: true }]);

  const setCrumbs = (newItems: BreadcrumbItem[]) => {
    newItems.unshift({... home});
    newItems[ newItems.length - 1 ].disabled = true;
    return crumbs.value = [ ...newItems ];
  };
 
  return { crumbs, setCrumbs };
}
