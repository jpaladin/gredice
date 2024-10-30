import { createAttributeDefinitionCategory } from "@gredice/storage";
import { Add } from "@signalco/ui-icons";
import { Button } from "@signalco/ui-primitives/Button";
import { Input } from "@signalco/ui-primitives/Input";
import { Modal } from "@signalco/ui-primitives/Modal";
import { Stack } from "@signalco/ui-primitives/Stack";
import { Typography } from "@signalco/ui-primitives/Typography";

export function CreateAttributeDefinitionCategoryButton({ entityTypeName }: { entityTypeName: string }) {
    async function submitForm(formData: FormData) {
        'use server';

        const name = formData.get('name') as string;
        const label = formData.get('label') as string;

        await createAttributeDefinitionCategory({
            name,
            label,
            entityTypeName
        });
    }

    return (
        <Modal
            trigger={(
                <Button
                    variant="solid"
                    startDecorator={<Add className="size-5" />}
                    fullWidth>
                    Nova kategorija
                </Button>
            )}
            title="Nova definicija">
            <Stack spacing={2}>
                <Stack spacing={1}>
                    <Typography level="h5">
                        Nova kategorija
                    </Typography>
                    <Typography level="body2">
                        Unesite podatke za kategoriju.
                    </Typography>
                </Stack>
                <form action={submitForm}>
                    <Stack spacing={4}>
                        <Stack spacing={1}>
                            <Input name="name" label="Naziv" />
                            <Input name="label" label="Labela" />
                        </Stack>
                        <Button variant="solid" type="submit">Kreiraj</Button>
                    </Stack>
                </form>
            </Stack>
        </Modal>
    );
}