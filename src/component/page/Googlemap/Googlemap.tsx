import React, { useState, useEffect } from 'react';

const Googlemap: React.FC = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('브라우저가 위치 정보를 지원하지 않습니다.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (err) => {
        setError('위치 정보를 가져올 수 없습니다. 권한을 허용해주세요.');
        console.error(err);
      }
    );
  }, []);

  if (!apiKey) {
    return (
      <div>
        <h2>API 키가 누락되었습니다</h2>
        <p>Google Maps API 키를 설정해주세요.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>오류 발생</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (latitude === null || longitude === null) {
    return (
      <div>
        <h2>지도 로딩 중...</h2>
        <p>잠시만 기다려 주세요. 위치 정보를 가져오고 있습니다.</p>
      </div>
    );
  }

  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=600x400&key=${apiKey}`;

  return (
    <div>
      <h2>전문가와 상담하기</h2>
      <p>내 위치: 위도 {latitude}, 경도 {longitude}</p>
      <img
        src={mapUrl}
        alt="Google Static Map"
        style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </div>
  );
};

export default Googlemap;
