// Components
import { Link } from '@/i18n/navigation';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Card } from '../ui/card';

interface LinkComponentProps {
  label: string;
  componentLink: string;
  variants?: string;
}

export function LinkComponent({ componentLink, label, variants }: LinkComponentProps) {
  return (
    <Link href={`/docs/components/${componentLink}`}>
      <Card className="hover:bg-accent flex flex-col gap-y-6 p-4 hover:scale-[1.02]">
        <div>
          <h6 className="text-lg font-semibold">{label}</h6>
          <span className="text-muted-foreground text-xs">{variants}</span>
        </div>
        <div className="self-end">
          <ArrowRightIcon />
        </div>
      </Card>
    </Link>
  );
}
