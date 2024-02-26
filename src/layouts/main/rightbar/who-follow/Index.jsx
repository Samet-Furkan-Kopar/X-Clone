import SidebarSection from "../../../../components/sidebar-section";
import {useAccount} from "../../../../store/user/hooks";
import {whoFollowUsers} from "../../../../mock/Index"
import UserCard from "../../../../components/user-card";
export default function WhoFollow() {
    const user = useAccount()
  return (
    <SidebarSection
			title="Kimi Takip Etmeli"
			more={`/connect_people?user_id=${user.id}`}
		>
			{whoFollowUsers.map((user) => (
        <UserCard key={user.id} user={user} />
        ))}
		</SidebarSection>
  )
}
