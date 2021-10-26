export default {
  name: "daybook",
  component: () =>
    import(
      /* webpackChunkName: "daybookLayout" */ "@/modules/daybook/layout/DayBookLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () =>
        import(
          /* webpackChunkName: "noEntrySelected" */ "@/modules/daybook/components/noEntrySelected.vue"
        ),
    },
    {
      path: ":id",
      name: "view-entry",
      component: () =>
        import(
          /* webpackChunkName: "noEntrySelected" */ "@/modules/daybook/view/entryView.vue"
        ),
      props: (route) => {
        return {
          id: route.params.id,
        };
      },
    },
  ],
};
