import { ReactiveVar } from 'meteor/reactive-var';

import { hasPermission } from '../../../../authorization';

export const sidebarItems = new ReactiveVar([]);
export const addSidebarItem = (title, slug) => {
	sidebarItems.set([
		...sidebarItems.get(),
		{
			title,
			slug,
		},
	]);
};

addSidebarItem('Current_Chats', 'livechat-current-chats');
addSidebarItem('Analytics', 'livechat-analytics');
addSidebarItem('Real_Time_Monitoring', 'livechat-real-time-monitoring');

if (hasPermission(Meteor.userId(), 'view-livechat-manager')) {
	addSidebarItem('Managers', 'livechat-managers');
}

if (hasPermission(Meteor.userId(), 'view-livechat-agents')) {
	addSidebarItem('Agents', 'livechat-agents');
}
addSidebarItem('Departments', 'livechat-departments');
addSidebarItem('Triggers', 'livechat-triggers');
addSidebarItem('Custom_Fields', 'livechat-customfields');
addSidebarItem('Installation', 'livechat-installation');
addSidebarItem('Appearance', 'livechat-appearance');
addSidebarItem('Webhooks', 'livechat-webhooks');
addSidebarItem('Facebook Messenger', 'livechat-facebook');
addSidebarItem('Office_Hours', 'livechat-officeHours');