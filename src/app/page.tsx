import Image from 'next/image';

import Authenticated from '@/assets/Authenticated.svg';

export default async function Home() {
  return (
    <div className="text-center">
      <Image
        src={Authenticated}
        alt=""
      />
      <p className="text-green-600">Successful Authenticated</p>
    </div>
  );
}
