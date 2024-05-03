interface CardInformationsProps {
  data: AddressTrackProps | undefined;
}

export const CardInformations = ({ data }: CardInformationsProps) => {
  const location = `${data?.location.city}, ${data?.location.region} - ${data?.location.country}`;

  return (
    <div className="max-w-4xl w-full rounded-xl bg-white flex max-md:flex-col max-md:items-center justify-center max-sm:p-4 p-10 gap-10 max-md:gap-4 mx-6 shadow-2xl relative top-12 z-20">
      <div className="flex flex-col gap-2 border-r-2 max-md:border-none pr-6 max-md:p-0">
        <span className="text-sm text-gray-600 max-md:text-center">
          <strong>IP ADDRESS</strong>
        </span>
        <span className="text-lg max-md:text-center">
          <strong>{data?.ip}</strong>
        </span>
      </div>

      <div className="flex flex-col gap-2 border-r-2 max-md:border-none pr-6 max-md:p-0">
        <span className="text-sm text-gray-600 max-md:text-center">
          <strong>LOCATION</strong>
        </span>
        <span className="text-lg max-md:text-center">
          <strong>{location}</strong>
        </span>
      </div>

      <div className="flex flex-col gap-2 border-r-2 max-md:border-none pr-6 max-md:p-0">
        <span className="text-sm text-gray-600 max-md:text-center">
          <strong>TIMEZONE</strong>
        </span>
        <span className="text-lg max-md:text-center">
          <strong>{data?.location.timezone}</strong>
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-600 max-md:text-center">
          <strong>ISP</strong>
        </span>
        <span className="text-lg max-md:text-center">
          <strong>{data?.isp}</strong>
        </span>
      </div>
    </div>
  );
};
