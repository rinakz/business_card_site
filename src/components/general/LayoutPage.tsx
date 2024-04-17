import stls from '../../styles/components/LayoutPage.module.sass'
import cn from 'classnames'



type TypeLayoutPageProps = {
  children: any;
  classNames?: any
};

export function LayoutPage({ children, classNames }: TypeLayoutPageProps) {
  return (
    <div className={cn(stls.wrapper, stls.container)}>
        {children}
    </div>
  );
}