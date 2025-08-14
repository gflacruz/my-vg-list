'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useSession } from '@/lib/auth-client';
import Link from 'next/link';

interface UserProfile {
  id: string;
  name: string;
  username: string | null;
  email: string;
  image: string | null;
  bio: string | null;
  location: string | null;
}

export default function UserProfilePage() {
  const params = useParams();
  const { userId } = params;
  const { data: session } = useSession();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (userId) {
      const fetchUserProfile = async () => {
        try {
          const response = await fetch(`/api/users/${userId}`);
          if (!response.ok) {
            throw new Error('Failed to fetch user profile');
          }
          const data = await response.json();
          setUserProfile(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchUserProfile();
    }
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userProfile) {
    return <div>User not found</div>;
  }

  const isOwnProfile = session?.user?.id === userProfile.id;

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center space-x-4">
        <Avatar className="w-24 h-24">
          <AvatarImage src={userProfile.image || ''} />
          <AvatarFallback>{userProfile.name?.[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">{userProfile.name}</h1>
          {userProfile.username && (
            <p className="text-gray-500">@{userProfile.username}</p>
          )}
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="mt-2 text-gray-600">{userProfile.bio || 'No bio yet.'}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Location</h2>
        <p className="mt-2 text-gray-600">{userProfile.location || 'Not specified'}</p>
      </div>
      {isOwnProfile && (
        <div className="mt-4">
          <Button asChild>
            <Link href="/profile/edit">Edit Profile</Link>
          </Button>
        </div>
      )}
    </div>
  );
}