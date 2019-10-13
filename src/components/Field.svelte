<script>
</script>

<style>
label {
    display: flex;
    flex-direction: column;
    font-weight: 600;
}

.tooltip {
    font-size: 0.875em;
    opacity: 0.5;
}

.error {
    color: red;
    font-size: 0.875em;
}
</style>

<div class="field">
    <label>
        <slot name="label"></slot>
        <slot></slot>
    </label>
    <div class="tooltip">
        <slot name="tooltip"></slot>
    </div>
    <div class="error">
        <slot name="error"></slot>
    </div>
</div>