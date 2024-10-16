import { EntitiesTable } from "./EntitiesTable";

export const dynamic = 'force-dynamic';

export default async function EntityTypesListDefault(props: { params: Promise<{ entityType: string }> }) {
    const params = await props.params;
    return (
        <EntitiesTable entityType={params.entityType} />
    );
}