<template>
  <div>
    <NuxtRouteAnnouncer />
    <RouterView />
  </div>
  <div>
    <NuxtLink to="/Account">Account</NuxtLink>
    <NuxtLink to="/Budgets">Budgets</NuxtLink>
    <NuxtLink to="/Calendar">Calendar</NuxtLink>
    <NuxtLink to="/Report">Report</NuxtLink>
  </div>
</template>
