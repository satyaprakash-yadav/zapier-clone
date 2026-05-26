import type { NodeExecutor } from "@/features/executions/types";

type manualTriggerData = Record<string, unknown>;

export const manualTriggerExecutor: NodeExecutor<manualTriggerData> = async ({
    nodeId,
    context,
    step,
}) => {
    // TODO: Pulich "loading" state for manual trigger

    const result = await step.run("manual-trigger", async () => context);

    // TODO: Pulish "success" state for manual trigger

    return result;
};
