import { create } from 'zustand';

interface ProfileState {
  name: string;
  gender: string;
  profesi: string;
  memberId: string;
  photo: string;
  memberType: string;
  memberSince: string;
  memberPacket: string;
  memberActiveUntil: string;
  setProfile: (profile: Partial<ProfileState>) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  name: 'Jane Doe',
  gender: 'Female',
  profesi: 'Dokter',
  memberId: '123456',
  photo: '/Images/profile/profile.jpeg',
  memberType: 'Gold',
  memberSince: '2023-01-01',
  memberPacket: '1 Year',
  memberActiveUntil: '2024-12-31',
  setProfile: (profile) => set((state) => ({ ...state, ...profile })),
}));
