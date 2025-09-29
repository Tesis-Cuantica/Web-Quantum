'use client';

import { useParams } from 'next/navigation';
import ExamenModulo from '../../../../../components/ExamenModulo';

export default function ExamenPage() {
  const params = useParams();
  const moduleId = params.moduleId as string;

  return <ExamenModulo moduleId={moduleId} />;
}
